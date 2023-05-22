--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

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
-- Name: links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.links (
    id integer NOT NULL,
    "linkUrl" text NOT NULL,
    "shortenUrl" text NOT NULL,
    views integer DEFAULT 0 NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: ranking; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ranking (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: ranking_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ranking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ranking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ranking_id_seq OWNED BY public.ranking.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    token text,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: ranking id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ranking ALTER COLUMN id SET DEFAULT nextval('public.ranking_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.links VALUES (4, 'http://globo.com', '69AemmrxeVDvaNUmYKLX1', 0, 1, '2023-05-22 10:39:02.879964');
INSERT INTO public.links VALUES (5, 'http://youtube.com', 'akNzo1pd55Rhulxt982yn', 0, 1, '2023-05-22 10:39:14.153821');
INSERT INTO public.links VALUES (3, 'http://globo.com.br', '6wc4IuAlVOUEspGGp32ZB', 19, 1, '2023-05-22 10:38:55.928287');
INSERT INTO public.links VALUES (6, 'http://youtube.com.br', 'oeCp_zW3HQ1D-pOX9lfmm', 3, 1, '2023-05-22 10:39:23.109644');


--
-- Data for Name: ranking; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (2, 'Bleble', 'bleble@bleble.com', '$2b$10$q/rewWf91PcyAnRB7wPD8eczxWd3NuZwVJf.sOUxDZa3oTzFDXQeu', NULL, '2023-05-19 21:06:24.192475');
INSERT INTO public.users VALUES (3, 'Bleble', 'bleble@blebli.com', '$2b$10$mTGiwtAw8VSZ3VOVnEOsVuJFKJ4ih6Ns4Qmm9xWQRX17Ahd9huOXa', NULL, '2023-05-19 22:00:36.941801');
INSERT INTO public.users VALUES (4, 'Bleble', 'bleble@blebu.com', '$2b$10$CF66IAUlGzdRrYs4sTHj9OGGcMg58156X37wPHA5iaWEMWQok7Dye', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJOYW1lIjoiQmxlYmxlIiwiaWF0IjoxNjg0NzU5NDc4LCJleHAiOjE2ODUzNjQyNzh9.xqzIiUPtZ8EvcFZkuhr0QwppiwvPdhi_7dH06cGBux4', '2023-05-19 22:09:27.002937');
INSERT INTO public.users VALUES (1, 'Blabla', 'blabla@blabla.com', '$2b$10$Tp3YOVmqLDh5OsQx3.w4E.06A/d/5s3TTDrGDg/.dd5tFM9Gw.Yza', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoiQmxhYmxhIiwiaWF0IjoxNjg0NzYyNjgyLCJleHAiOjE2ODUzNjc0ODJ9.CE0vRnN50PJxvnlSwdmUo3WPqWfQsLuRROrImsagguY', '2023-05-18 23:11:58.526001');


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.links_id_seq', 6, true);


--
-- Name: ranking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ranking_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: links links_linkUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_linkUrl_key" UNIQUE ("linkUrl");


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: links links_shortenUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_shortenUrl_key" UNIQUE ("shortenUrl");


--
-- Name: ranking ranking_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT ranking_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_token_key UNIQUE (token);


--
-- Name: links links_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: ranking ranking_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT "ranking_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

