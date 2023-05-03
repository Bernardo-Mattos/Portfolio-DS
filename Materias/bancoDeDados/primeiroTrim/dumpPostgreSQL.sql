--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Debian 15.2-1.pgdg110+1)
-- Dumped by pg_dump version 15.2 (Debian 15.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: anotacoes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.anotacoes (
    dia integer NOT NULL,
    mes integer NOT NULL,
    ano integer NOT NULL,
    identificador integer NOT NULL
);


--
-- Name: anotacoes_identificador_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.anotacoes_identificador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: anotacoes_identificador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.anotacoes_identificador_seq OWNED BY public.anotacoes.identificador;


--
-- Name: aplicativo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.aplicativo (
    nome character varying NOT NULL,
    identificador integer NOT NULL,
    id_calendario integer NOT NULL,
    id_consumoagua integer NOT NULL,
    id_timer integer NOT NULL,
    id_notificacao integer NOT NULL,
    id_background integer NOT NULL
);


--
-- Name: aplicativo_id_background_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.aplicativo_id_background_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: aplicativo_id_background_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.aplicativo_id_background_seq OWNED BY public.aplicativo.id_background;


--
-- Name: aplicativo_id_calendario_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.aplicativo_id_calendario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: aplicativo_id_calendario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.aplicativo_id_calendario_seq OWNED BY public.aplicativo.id_calendario;


--
-- Name: aplicativo_id_consumoagua_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.aplicativo_id_consumoagua_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: aplicativo_id_consumoagua_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.aplicativo_id_consumoagua_seq OWNED BY public.aplicativo.id_consumoagua;


--
-- Name: aplicativo_id_notificacao_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.aplicativo_id_notificacao_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: aplicativo_id_notificacao_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.aplicativo_id_notificacao_seq OWNED BY public.aplicativo.id_notificacao;


--
-- Name: aplicativo_id_timer_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.aplicativo_id_timer_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: aplicativo_id_timer_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.aplicativo_id_timer_seq OWNED BY public.aplicativo.id_timer;


--
-- Name: aplicativo_identificador_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.aplicativo_identificador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: aplicativo_identificador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.aplicativo_identificador_seq OWNED BY public.aplicativo.identificador;


--
-- Name: background; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.background (
    niveldaagua integer NOT NULL,
    identificador integer NOT NULL
);


--
-- Name: background_identificador_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.background_identificador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: background_identificador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.background_identificador_seq OWNED BY public.background.identificador;


--
-- Name: calendario; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.calendario (
    dia integer NOT NULL,
    mes integer NOT NULL,
    ano integer NOT NULL,
    identificador integer NOT NULL,
    id_anotacoes integer NOT NULL
);


--
-- Name: calendario_id_anotacoes_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.calendario_id_anotacoes_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: calendario_id_anotacoes_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.calendario_id_anotacoes_seq OWNED BY public.calendario.id_anotacoes;


--
-- Name: calendario_identificador_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.calendario_identificador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: calendario_identificador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.calendario_identificador_seq OWNED BY public.calendario.identificador;


--
-- Name: consumoagua; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.consumoagua (
    aguapordia numeric(10,2) NOT NULL,
    aguabanho numeric(10,2) NOT NULL,
    aguaingerida numeric(10,2) NOT NULL,
    aguaconsumida numeric(10,2) NOT NULL,
    identificador integer NOT NULL
);


--
-- Name: consumoagua_identificador_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.consumoagua_identificador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: consumoagua_identificador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.consumoagua_identificador_seq OWNED BY public.consumoagua.identificador;


--
-- Name: demo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.demo (
    id integer NOT NULL,
    name character varying(200) DEFAULT ''::character varying NOT NULL,
    hint text DEFAULT ''::text NOT NULL
);


--
-- Name: demo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.demo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: demo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.demo_id_seq OWNED BY public.demo.id;


--
-- Name: notificacao; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notificacao (
    titulo character varying(30),
    conteudo character varying(200),
    identificador integer NOT NULL
);


--
-- Name: notificacao_identificador_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.notificacao_identificador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: notificacao_identificador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.notificacao_identificador_seq OWNED BY public.notificacao.identificador;


--
-- Name: timer; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.timer (
    nome character varying(25) NOT NULL,
    tempoinicial numeric(5,2) NOT NULL,
    tempofinal numeric(5,2) NOT NULL,
    identificador integer NOT NULL,
    id_notificacao integer NOT NULL
);


--
-- Name: timer_id_notificacao_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.timer_id_notificacao_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: timer_id_notificacao_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.timer_id_notificacao_seq OWNED BY public.timer.id_notificacao;


--
-- Name: timer_identificador_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.timer_identificador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: timer_identificador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.timer_identificador_seq OWNED BY public.timer.identificador;


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usuario (
    nome character varying(100) NOT NULL,
    idade integer NOT NULL,
    peso numeric(5,2) NOT NULL,
    altura numeric(5,2) NOT NULL,
    cpf character varying(11) NOT NULL,
    email character varying(50) NOT NULL,
    tempotimer numeric(5,2),
    identificador integer NOT NULL,
    id_app integer NOT NULL,
    id_calendario integer NOT NULL,
    id_consumoagua integer NOT NULL,
    id_timer integer NOT NULL,
    id_notificacao integer NOT NULL,
    id_background integer NOT NULL
);


--
-- Name: usuario_id_app_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuario_id_app_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuario_id_app_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuario_id_app_seq OWNED BY public.usuario.id_app;


--
-- Name: usuario_id_background_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuario_id_background_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuario_id_background_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuario_id_background_seq OWNED BY public.usuario.id_background;


--
-- Name: usuario_id_calendario_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuario_id_calendario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuario_id_calendario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuario_id_calendario_seq OWNED BY public.usuario.id_calendario;


--
-- Name: usuario_id_consumoagua_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuario_id_consumoagua_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuario_id_consumoagua_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuario_id_consumoagua_seq OWNED BY public.usuario.id_consumoagua;


--
-- Name: usuario_id_notificacao_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuario_id_notificacao_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuario_id_notificacao_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuario_id_notificacao_seq OWNED BY public.usuario.id_notificacao;


--
-- Name: usuario_id_timer_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuario_id_timer_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuario_id_timer_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuario_id_timer_seq OWNED BY public.usuario.id_timer;


--
-- Name: usuario_identificador_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuario_identificador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuario_identificador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuario_identificador_seq OWNED BY public.usuario.identificador;


--
-- Name: anotacoes identificador; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.anotacoes ALTER COLUMN identificador SET DEFAULT nextval('public.anotacoes_identificador_seq'::regclass);


--
-- Name: aplicativo identificador; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo ALTER COLUMN identificador SET DEFAULT nextval('public.aplicativo_identificador_seq'::regclass);


--
-- Name: aplicativo id_calendario; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo ALTER COLUMN id_calendario SET DEFAULT nextval('public.aplicativo_id_calendario_seq'::regclass);


--
-- Name: aplicativo id_consumoagua; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo ALTER COLUMN id_consumoagua SET DEFAULT nextval('public.aplicativo_id_consumoagua_seq'::regclass);


--
-- Name: aplicativo id_timer; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo ALTER COLUMN id_timer SET DEFAULT nextval('public.aplicativo_id_timer_seq'::regclass);


--
-- Name: aplicativo id_notificacao; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo ALTER COLUMN id_notificacao SET DEFAULT nextval('public.aplicativo_id_notificacao_seq'::regclass);


--
-- Name: aplicativo id_background; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo ALTER COLUMN id_background SET DEFAULT nextval('public.aplicativo_id_background_seq'::regclass);


--
-- Name: background identificador; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.background ALTER COLUMN identificador SET DEFAULT nextval('public.background_identificador_seq'::regclass);


--
-- Name: calendario identificador; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.calendario ALTER COLUMN identificador SET DEFAULT nextval('public.calendario_identificador_seq'::regclass);


--
-- Name: calendario id_anotacoes; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.calendario ALTER COLUMN id_anotacoes SET DEFAULT nextval('public.calendario_id_anotacoes_seq'::regclass);


--
-- Name: consumoagua identificador; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consumoagua ALTER COLUMN identificador SET DEFAULT nextval('public.consumoagua_identificador_seq'::regclass);


--
-- Name: demo id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.demo ALTER COLUMN id SET DEFAULT nextval('public.demo_id_seq'::regclass);


--
-- Name: notificacao identificador; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notificacao ALTER COLUMN identificador SET DEFAULT nextval('public.notificacao_identificador_seq'::regclass);


--
-- Name: timer identificador; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.timer ALTER COLUMN identificador SET DEFAULT nextval('public.timer_identificador_seq'::regclass);


--
-- Name: timer id_notificacao; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.timer ALTER COLUMN id_notificacao SET DEFAULT nextval('public.timer_id_notificacao_seq'::regclass);


--
-- Name: usuario identificador; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario ALTER COLUMN identificador SET DEFAULT nextval('public.usuario_identificador_seq'::regclass);


--
-- Name: usuario id_app; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_app SET DEFAULT nextval('public.usuario_id_app_seq'::regclass);


--
-- Name: usuario id_calendario; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_calendario SET DEFAULT nextval('public.usuario_id_calendario_seq'::regclass);


--
-- Name: usuario id_consumoagua; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_consumoagua SET DEFAULT nextval('public.usuario_id_consumoagua_seq'::regclass);


--
-- Name: usuario id_timer; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_timer SET DEFAULT nextval('public.usuario_id_timer_seq'::regclass);


--
-- Name: usuario id_notificacao; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_notificacao SET DEFAULT nextval('public.usuario_id_notificacao_seq'::regclass);


--
-- Name: usuario id_background; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_background SET DEFAULT nextval('public.usuario_id_background_seq'::regclass);


--
-- Name: anotacoes anotacoes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.anotacoes
    ADD CONSTRAINT anotacoes_pkey PRIMARY KEY (identificador);


--
-- Name: aplicativo aplicativo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo
    ADD CONSTRAINT aplicativo_pkey PRIMARY KEY (identificador);


--
-- Name: background background_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.background
    ADD CONSTRAINT background_pkey PRIMARY KEY (identificador);


--
-- Name: calendario calendario_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.calendario
    ADD CONSTRAINT calendario_pkey PRIMARY KEY (identificador);


--
-- Name: consumoagua consumoagua_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consumoagua
    ADD CONSTRAINT consumoagua_pkey PRIMARY KEY (identificador);


--
-- Name: demo demo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.demo
    ADD CONSTRAINT demo_pkey PRIMARY KEY (id);


--
-- Name: notificacao notificacao_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notificacao
    ADD CONSTRAINT notificacao_pkey PRIMARY KEY (identificador);


--
-- Name: timer timer_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.timer
    ADD CONSTRAINT timer_pkey PRIMARY KEY (identificador);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (cpf);


--
-- Name: aplicativo aplicativo_id_background_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo
    ADD CONSTRAINT aplicativo_id_background_fkey FOREIGN KEY (id_background) REFERENCES public.background(identificador);


--
-- Name: aplicativo aplicativo_id_calendario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo
    ADD CONSTRAINT aplicativo_id_calendario_fkey FOREIGN KEY (id_calendario) REFERENCES public.calendario(identificador);


--
-- Name: aplicativo aplicativo_id_consumoagua_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo
    ADD CONSTRAINT aplicativo_id_consumoagua_fkey FOREIGN KEY (id_consumoagua) REFERENCES public.consumoagua(identificador);


--
-- Name: aplicativo aplicativo_id_notificacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo
    ADD CONSTRAINT aplicativo_id_notificacao_fkey FOREIGN KEY (id_notificacao) REFERENCES public.notificacao(identificador);


--
-- Name: aplicativo aplicativo_id_timer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.aplicativo
    ADD CONSTRAINT aplicativo_id_timer_fkey FOREIGN KEY (id_timer) REFERENCES public.timer(identificador);


--
-- Name: calendario calendario_id_anotacoes_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.calendario
    ADD CONSTRAINT calendario_id_anotacoes_fkey FOREIGN KEY (id_anotacoes) REFERENCES public.anotacoes(identificador);


--
-- Name: timer timer_id_notificacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.timer
    ADD CONSTRAINT timer_id_notificacao_fkey FOREIGN KEY (id_notificacao) REFERENCES public.notificacao(identificador);


--
-- Name: usuario usuario_id_app_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_app_fkey FOREIGN KEY (id_app) REFERENCES public.aplicativo(identificador);


--
-- Name: usuario usuario_id_background_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_background_fkey FOREIGN KEY (id_background) REFERENCES public.background(identificador);


--
-- Name: usuario usuario_id_calendario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_calendario_fkey FOREIGN KEY (id_calendario) REFERENCES public.calendario(identificador);


--
-- Name: usuario usuario_id_consumoagua_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_consumoagua_fkey FOREIGN KEY (id_consumoagua) REFERENCES public.consumoagua(identificador);


--
-- Name: usuario usuario_id_notificacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_notificacao_fkey FOREIGN KEY (id_notificacao) REFERENCES public.notificacao(identificador);


--
-- Name: usuario usuario_id_timer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_timer_fkey FOREIGN KEY (id_timer) REFERENCES public.timer(identificador);


--
-- PostgreSQL database dump complete
--

