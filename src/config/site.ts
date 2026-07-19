/**
 * Configuração central do site.
 * Altere aqui o telefone, redes sociais e textos de contato.
 * Tudo o que for exibido como conteúdo (textos de seções, preços, comodidades,
 * galeria, depoimentos, FAQ) fica em src/data/*.json.
 */

export const siteConfig = {
  /** Nome comercial exibido no site */
  name: "Casa Frente Mar",
  tagline: "Casa de temporada em Caraguatatuba",

  /** Domínio final do site (usado em SEO / Open Graph / sitemap) */
  url: "https://felipeteixeira.github.io/casa-frente-mar",

  /**
   * Telefone do anfitrião (WhatsApp).
   * Formato local, apenas para exibição.
   */
  phoneDisplay: "(12) 99769-5607",

  /**
   * Número em formato internacional, somente dígitos (DDI + DDD + número).
   * Usado para montar o link do WhatsApp (wa.me).
   */
  whatsappNumber: "5512997695607",

  /** Mensagens pré-preenchidas para diferentes CTAs do site */
  whatsappMessages: {
    default:
      "Olá! Vi o site da casa em Caraguatatuba e gostaria de saber mais sobre disponibilidade e valores.",
    reserva:
      "Olá! Gostaria de reservar uma data na casa em Caraguatatuba. Pode me passar as informações de disponibilidade?",
    reveillon:
      "Olá! Tenho interesse em reservar a casa para o Réveillon. Ainda há datas disponíveis?",
    duvida:
      "Olá! Tenho uma dúvida sobre a casa em Caraguatatuba, pode me ajudar?",
  },

  /** Redes sociais e contato — deixe vazio ("") para ocultar o ícone correspondente */
  social: {
    instagram: "https://www.instagram.com/casa_frente_mar/",
    email: "",
  },

  /** Link do anúncio no Airbnb — reforça credibilidade (avaliações verificáveis em outra plataforma) */
  airbnbUrl: "https://airbnb.com/h/casa-com-piscina-frente-mar",

  /** Localização (usada na seção de Localização e no SEO local) */
  location: {
    neighborhood: "Porto Novo",
    city: "Caraguatatuba",
    state: "SP",
    address: "Av. Geraldo Nogueira da Silva, 1226 - Porto Novo, Caraguatatuba - SP",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Av.+Geraldo+Nogueira+da+Silva,+1226+-+Porto+Novo,+Caraguatatuba+-+SP&output=embed",
    mapsShareUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Geraldo+Nogueira+da+Silva,+1226+-+Porto+Novo,+Caraguatatuba+-+SP",
  },
} as const;

/** Monta um link direto do wa.me já com a mensagem codificada */
export function buildWhatsAppLink(
  message: keyof typeof siteConfig.whatsappMessages = "default",
): string {
  const text = encodeURIComponent(siteConfig.whatsappMessages[message]);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
