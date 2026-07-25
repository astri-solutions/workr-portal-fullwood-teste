// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

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
    items: [],
  },

  nav: [
    { id: "docs-cvm", label: "Documentos CVM", href: "/documentos-cvm.html", children: [] },
    { id: "central-resultados", label: "Estatutos, Políticas e Códigos", href: "/central-resultados.html", children: [] },
    { id: "atas-assembleias", label: "Atas e Assembleias", href: "/atas-assembleias.html", children: [] },
    { id: "p3qvhye", label: "Demonstrações Financeiras", href: "/xn03fdi.html", children: [] },
    { id: "fale-ri", label: "Fale com RI", href: "/fale-com-ri.html", children: [] },
  ],

  empresas: [
    { id: 'principal', label: "Fullwood Teste", short: 'FT' },
  ],

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "8df35d59-7b37-4134-8e68-8d8764443b62",
  },

  header: { variant: 'tabmenu' },

  seo: {
    title:             "Fullwood galpões",
    description:       "",
    googleAnalyticsId: "",
    clarityId:         "",
  },

  contact: {
    email: "",
  },

  languages: ["pt-BR","en"],

  topbar: {
    ri: { label: 'Relações com Investidores', url: '/' },
    institucional: { label: 'Institucional', url: '#' },
    showTicker: true,
  },

  restrictedNav: [],

  footer: {
    variant:   'simple',
    address:   "",
    email:     "",
    phone:     "",
    hours:     "",
    copyright: "©Copyright Fullwood Teste 2026",
    social: { linkedin: "#", instagram: "#", facebook: "#" },
    legalLinks: [
      { label: "Termos e Condições", href: "/termos-e-condicoes.html" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade.html" },
      { label: "Definições de Cookies", href: "/definicao-de-cookies.html" }
    ],
    legalText: "As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários.",
  },

};
