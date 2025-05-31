import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

type Sugestao = {
    id: number;
    titulo: string;
    descricao: string;
};

const API_URL = "https://api-cop30.onrender.com/api/posts";

const Sugestoes = () => {
    const [sugestoes, setSugestoes] = useState<Sugestao[]>([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState<string | null>(null);
    const [novaSugestao, setNovaSugestao] = useState({ titulo: "", descricao: "" });
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [editSugestao, setEditSugestao] = useState({ titulo: "", descricao: "" });

    useEffect(() => {
        buscarSugestoes();
    }, []);

    const buscarSugestoes = async () => {
        setLoading(true);
        try {
            const res = await axios.get(API_URL);
            setSugestoes(res.data);
            setErro(null);
        } catch (e) {
            setErro("Erro ao buscar sugestões.");
        }
        setLoading(false);
    };

    const excluirSugestao = async (id: number) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setSugestoes(sugestoes.filter(s => s.id !== id));
        } catch {
            setErro("Erro ao excluir sugestão.");
        }
    };

    const criarSugestao = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post<Sugestao>(API_URL, novaSugestao);
            setSugestoes([...sugestoes, res.data]);
            setNovaSugestao({ titulo: "", descricao: "" });
        } catch {
            setErro("Erro ao criar sugestão.");
        }
    };

    const iniciarEdicao = (s: Sugestao) => {
        setEditandoId(s.id);
        setEditSugestao({ titulo: s.titulo, descricao: s.descricao });
    };

    const salvarEdicao = async (id: number) => {
        try {
            const res = await axios.put<Sugestao>(`${API_URL}/${id}`, editSugestao);
            setSugestoes(sugestoes.map(s => (s.id === id ? res.data : s)));
            setEditandoId(null);
        } catch {
            setErro("Erro ao editar sugestão.");
        }
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4 text-center page-title">Sugestões</h1>
            {erro && <div className="alert alert-danger">{erro}</div>}
            <form onSubmit={criarSugestao} className="mb-4 row g-2 align-items-end">
            <div className="col-md-4">
                <label className="form-label">Título</label>
                <input
                className="form-control"
                placeholder="Título"
                value={novaSugestao.titulo}
                onChange={e => setNovaSugestao({ ...novaSugestao, titulo: e.target.value })}
                required
                />
            </div>
            <div className="col-md-5">
                <label className="form-label">Descrição</label>
                <textarea
                className="form-control"
                placeholder="Descreva sua sugestão com detalhes"
                value={novaSugestao.descricao}
                onChange={e => setNovaSugestao({ ...novaSugestao, descricao: e.target.value })}
                required
                rows={5}
                style={{ resize: "vertical", minHeight: 100 }}
                />
            </div>
                <style>
                    {`
                        .card.h-100 {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        }
                        @media (max-width: 767px) {
                            .card.h-100 {
                                min-height: 180px;
                            }
                        }
                    `}
                </style>
                <div className="col-md-3 d-grid">
                    <button type="submit" className="btn btn-primary">
                        Adicionar
                    </button>
                </div>
            </form>
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Carregando...</span>
                    </div>
                </div>
            ) : (
                <div className="row g-4">
                    {sugestoes.map(s => (
                        <div key={s.id} className="col-md-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    {editandoId === s.id ? (
                                        <>
                                            <input
                                                className="form-control mb-2"
                                                placeholder="Título"
                                                value={editSugestao.titulo}
                                                onChange={e => setEditSugestao({ ...editSugestao, titulo: e.target.value })}
                                            />
                                            <textarea
                                                className="form-control mb-2"
                                                placeholder="Descrição"
                                                value={editSugestao.descricao}
                                                onChange={e => setEditSugestao({ ...editSugestao, descricao: e.target.value })}
                                                rows={5}
                                                style={{ resize: "vertical" }}
                                            />
                                            <div className="d-flex gap-2">
                                                <button className="btn btn-success btn-sm" onClick={() => salvarEdicao(s.id)}>
                                                    Salvar
                                                </button>
                                                <button className="btn btn-secondary btn-sm" onClick={() => setEditandoId(null)}>
                                                    Cancelar
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h5 className="card-title">{s.titulo}</h5>
                                            <p className="card-text">{s.descricao}</p>
                                            <div className="d-flex gap-2">
                                                <button className="btn btn-outline-primary btn-sm" onClick={() => iniciarEdicao(s)}>
                                                    Editar
                                                </button>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => excluirSugestao(s.id)}>
                                                    Excluir
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sugestoes;