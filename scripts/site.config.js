// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

  // Ligado via Painel de Controle (super_admin) — quando true, page.js
  // mostra só uma tela de aviso e não inicializa o resto do site.
  maintenance: false,

  company: {
    name:        "Fullwood Teste",
    nameShort:   "Fullwood Teste",
    description: 'Relações com Investidores — Fullwood Teste.',
    logoOriginal: '/assets/logotipo/logotipo-original.webp',
    logoNegative: '/assets/logotipo/logotipo-negative.webp',
    logoContrast: '/assets/logotipo/logotipo-negative.webp',
    favicon:      '/favicon.png',
  },

  colors: {
    primary:   "#5de6ff",
    secondary: "#044361",
    tertiary:  "#bfdbff",
  },

  fonts: {
    display: "dm-sans",
    body:    "inter",
  },

  ticker: {
    type:      "iframe",
    iframeUrl: "",
    items: [
      { symbol: 'WRLT3', price: 'R$ 00,00', change: '0,00%', direction: 'up' }
    ],
  },

  nav: [
    { id: "docs-cvm", label: "Documentos CVM", labels: {"en":"CVM Documents","pt-BR":"Documentos CVM"}, href: "/documentos-cvm.html", pageType: "lista-agrupada", listaAgrupadaStyle: "accordion", listaAgrupadaCategories: [{"id":"Comunicado ao Mercado","label":"Comunicado ao Mercado"},{"id":"Fato Relevante","label":"Fato Relevante"},{"id":"Relatório de Proventos","label":"Relatório de Proventos"},{"id":"mk-t4j8ryv","label":"Atas","labels":{"pt-BR":"Atas"}},{"id":"mk-o114dbq","label":"Assembleias","labels":{"pt-BR":"Assembleias"}},{"id":"mk-6hu4kss","label":"Regimentos","labels":{"pt-BR":"Regimentos"}},{"id":"mk-crcmpyp","label":"Formulários de Referência","labels":{"pt-BR":"Formulários de Referência"}}], children: [] },
    { id: "fale-ri", label: "Fale com RI", labels: {"en":"Contact Investor Relations","pt-BR":"Fale com RI"}, href: "/fale-com-ri.html", pageType: "formulario", children: [] },
    { id: "cdrdeb966", label: "Central de Resultados", labels: {"en":"Results Center","pt-BR":"Central de Resultados"}, href: "/cdrbdb729.html", pageType: "tabela-resultados", children: [] },
    { id: "bnv5jo6", label: "Quem Somos", labels: {"en":"Who We Are","pt-BR":"Quem Somos"}, href: "/bnv5jo6.html", pageType: "show", children: [] },
    { id: "2abox0v", label: "Lista teste", labels: {"en":"Test list","pt-BR":"Lista teste"}, href: "/2abox0v.html", pageType: "lista-agrupada", listaAgrupadaStyle: "accordion", listaAgrupadaCategories: [{"id":"mk-wjwkdaa","label":"Teste","labels":{"en":"Test"}},{"id":"mk-a6agjds","label":"Teste","labels":{"en":"Test"}},{"id":"mk-l6obbj5","label":"Lista teste"},{"id":"mk-nt4dl3z","label":"Valores Mobiliários Negociados e Detidos"}], children: [] },
  ],

  empresas: [
    { id: "principal-1784982293516", label: "Fullwood Galpões", short: "FG" },
    { id: "empresa-teste-1785420256838", label: "Empresa teste", short: "ET" }
  ],

  header: { variant: 'tabmenu' },

  languages: ["pt-BR","en"],

  topbar: {
    ri: { label: "Relações com Investidores", url: "/" },
    institucional: { label: "Institucional", url: "#" },
    showTicker: true,
  },

  restrictedNav: [],

  footer: {
    variant: "full",
    model: "completo",
    email: "",
    content: {"pt-BR":{"address":"","phone":"","hours":"","copyright":"©Copyright Fullwood Teste 2026","disclaimer":"As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários."}},
    social: { linkedin: "#", instagram: "#", facebook: "#" },
    legalLinks: [
      { label: "Termos e Condições", href: "/termos-e-condicoes.html" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade.html" },
      { label: "Definições de Cookies", href: "/definicao-de-cookies.html" }
    ],
  },

  splash: {
    enabled: false,
    size: 'md',
    titulo: '',
    texto: '',
    conteudo: '',
    legenda: '',
    buttons: [],
  },

  cookies: {
    enabled: true,
    layout: 'full',
    theme: 'light',
    title: 'Utilizamos cookies',
    description: 'Usamos cookies para melhorar sua experiência.',
    acceptLabel: 'Aceitar todos',
    rejectLabel: 'Rejeitar',
    showReject: true,
    showCustomize: false,
  },

  errorPages: [],

  banner: [
    {
      "id": "b1",
      "imagem": "/assets/banner/b1-495494a2a5ea.jpg",
      "content": {
        "en": {
          "cta": "Learn more",
          "titulo": "Investor Relations",
          "subtitulo": "Lorem ipsum"
        },
        "pt-BR": {
          "cta": "Saiba mais",
          "titulo": "Teste title",
          "subtitulo": "Transparência e geração de valor para nossos acionistas."
        }
      }
    }
  ],

  // Home hero shortcuts (Banner com navbar) — null = derive from siteConfig.nav.
  home: {
    shortcuts: null,
  },

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "8df35d59-7b37-4134-8e68-8d8764443b62",
  },

};
