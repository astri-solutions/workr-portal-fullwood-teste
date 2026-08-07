// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

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
    primary:   "#ff00dd",
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
    { id: "2abox0v", label: "Lista teste", labels: {"en":"Test list","pt-BR":"Lista teste"}, href: "/2abox0v.html", pageType: "lista-agrupada", listaAgrupadaStyle: "accordion", listaAgrupadaCategories: [{"id":"mk-wjwkdaa","label":"Teste","labels":{"en":"Test"}},{"id":"mk-a6agjds","label":"Teste","labels":{"en":"Test"}},{"id":"mk-l6obbj5","label":"Lista teste"},{"id":"mk-nt4dl3z","label":"Valores Mobiliários Negociados e Detidos"}], children: [] },
    { id: "w75bpfc", label: "Quem Somos", labels: {"en":"About","pt-BR":"Quem Somos"}, href: "/w75bpfc.html", pageType: "show", children: [] },
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
    variant: "simple",
    model: "reduzido",
    email: "workrlite@astri.com",
    content: {"pt-BR":{"hours":"Segunda a sexta, das 08h às 18h, exceto feriados.","phone":"(11) 1234-5678","address":"Av. Brigadeiro Faria Lima, 2.277, 17º andar — São Paulo/SP, CEP 01452-000","copyright":"©Copyright Workr Lite -  2026","disclaimer":"As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários."}},
    social: { linkedin: "https://www.linkedin.com/company/astri-solutions/", instagram: "#", facebook: "#" },
    socials: [ { platform: "LinkedIn", url: "https://www.linkedin.com/company/astri-solutions/" } ],
    legalLinks: [
      { label: "Termos e Condições", href: "/termos-e-condicoes.html" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade.html" },
      { label: "Definições de Cookies", href: "/definicao-de-cookies.html" }
    ],
  },

  splash: {
    "size": "md",
    "buttons": [
      {
        "url": "",
        "label": "My button",
        "variant": "primary"
      }
    ],
    "content": {
      "en": {
        "texto": "This is a test",
        "titulo": "Test",
        "legenda": "",
        "conteudo": "This is my test",
        "imageUrl": "data:image/webp;base64,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"
      },
      "pt-BR": {
        "texto": "Meu teste",
        "titulo": "Teste",
        "legenda": "",
        "conteudo": "Esté é um teste",
        "imageUrl": "data:image/webp;base64,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"
      }
    },
    "enabled": true,
    "imageUrl": null
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

  home: {
    shortcuts: null,
  },

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "8df35d59-7b37-4134-8e68-8d8764443b62",
  },

};
