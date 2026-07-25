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
    primary:   "#1d3767",
    secondary: "#b9e5fa",
    tertiary:  "#595959",
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
    { id: "docs-cvm", label: "Documentos CVM", labels: {"pt-BR":"Documentos CVM"}, href: "/documentos-cvm.html", pageType: "lista", children: [] },
    { id: "central-resultados", label: "Estatutos, Políticas e Códigos", labels: {"pt-BR":"Estatutos, Políticas e Códigos"}, href: "/central-resultados.html", pageType: "lista-agrupada", children: [] },
    { id: "atas-assembleias", label: "Atas e Assembleias", labels: {"pt-BR":"Atas e Assembleias"}, href: "/atas-assembleias.html", pageType: "lista-agrupada", children: [] },
    { id: "p3qvhye", label: "Demonstrações Financeiras", labels: {"pt-BR":"Demonstrações Financeiras"}, href: "/xn03fdi.html", pageType: "lista", children: [] },
    { id: "fale-ri", label: "Fale com RI", labels: {"pt-BR":"Fale com RI"}, href: "/fale-com-ri.html", pageType: "formulario", children: [] },
  ],

  empresas: [
    { id: "principal-1784982293516", label: "Fullwood Galpões", short: "FG" }
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
    variant: 'simple',
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
        "pt-BR": {
          "titulo": "Relações com Investidores",
          "subtitulo": "Transparência e geração de valor para nossos acionistas.",
          "cta": "Saiba mais"
        },
        "en": {
          "titulo": "Investor Relations",
          "subtitulo": "Lorem ipsum",
          "cta": "Learn more"
        }
      }
    }
  ],

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "8df35d59-7b37-4134-8e68-8d8764443b62",
  },

};
