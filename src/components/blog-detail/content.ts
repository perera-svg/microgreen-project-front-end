import {
  blogAllArticles,
  blogFeaturedArticleId,
  getBlogArticleById,
  type BlogArticleId,
  type BlogArticleSummary,
} from "@/components/blog/content"

type BlogArticleAuthor = {
  avatarAlt?: string
  avatarSrc?: string
  bio: string
  name: string
}

type BlogArticleComparisonRow = {
  microgreenValue: string
  matureValue: string
  nutrient: string
}

type BlogArticleComparisonTable = {
  columns: [string, string, string]
  rows: BlogArticleComparisonRow[]
}

type BlogArticleQuote = {
  attribution: string
  content: string
}

type BlogArticleSection = {
  callout?: string
  id: string
  paragraphs?: string[]
  table?: BlogArticleComparisonTable
  tips?: string[]
  title: string
}

export type BlogArticleDetail = {
  author: BlogArticleAuthor
  breadcrumbTitle: string
  closing: string
  intro: string
  moreArticleIds: BlogArticleId[]
  quote?: BlogArticleQuote
  sections: BlogArticleSection[]
  sidebarRelatedIds: BlogArticleId[]
  tags: string[]
}

export const blogDetailLabels = {
  backToJournal: "Back to Journal",
  breadcrumbBlog: "Blog",
  breadcrumbHome: "Home",
  copyLink: "Copy Link",
  facebook: "Facebook",
  inThisArticle: "IN THIS ARTICLE",
  moreFromJournal: "More From The Journal",
  notFoundDescription:
    "That journal entry is not available in the current local content set.",
  notFoundTitle: "Article not found",
  relatedArticles: "RELATED ARTICLES",
  share: "SHARE",
  shareThisArticle: "Share this article:",
  tags: "Tags:",
  whatsapp: "WhatsApp",
}

export const blogDetailMessages = {
  sharePlaceholderDescription:
    "Direct social sharing stays lightweight in this pass.",
}

const defaultMoreArticleIds: BlogArticleId[] = [
  "growing-sunflower-microgreens-guide",
  "chef-approved-pea-shoot-recipes",
  "zero-waste-microgreen-farm",
]

const categoryAuthors: Record<
  BlogArticleSummary["category"],
  BlogArticleAuthor
> = {
  "farm-stories": {
    bio: "Farm journal notes from our Colombo growing and harvest teams, focused on process, freshness, and seasonality.",
    name: "Anjali Peris",
  },
  news: {
    bio: "Updates from the Ceylon Greens team on exports, operations, retail rollouts, and partner programmes.",
    name: "Ceylon Greens Team",
  },
  nutrition: {
    bio: "Nutritionist and microgreens researcher based in Colombo. Dr. Perera has published over 20 papers on tropical superfoods and their health benefits.",
    name: "Dr. Kavinda Perera",
  },
  recipes: {
    bio: "Chef-driven serving notes from our test kitchen, focused on fast home recipes and restaurant-ready finishing ideas.",
    name: "Chef Iresha Fernando",
  },
}

function toCategoryLabel(category: BlogArticleSummary["category"]) {
  switch (category) {
    case "farm-stories":
      return "Farm Stories"
    case "nutrition":
      return "Nutrition"
    case "recipes":
      return "Recipes"
    case "news":
      return "News"
  }
}

function buildRelatedIds(summary: BlogArticleSummary) {
  const sameCategory = blogAllArticles
    .filter(
      (article) =>
        article.id !== summary.id && article.category === summary.category
    )
    .map((article) => article.id)

  if (sameCategory.length >= 2) {
    return sameCategory.slice(0, 2)
  }

  const fallbackIds = blogAllArticles
    .filter((article) => article.id !== summary.id)
    .map((article) => article.id)

  return [...sameCategory, ...fallbackIds].slice(0, 2)
}

function buildGenericSections(summary: BlogArticleSummary): BlogArticleSection[] {
  switch (summary.category) {
    case "nutrition":
      return [
        {
          id: "why-it-matters",
          paragraphs: [
            summary.excerpt,
            `The most useful way to read findings around ${summary.tag.toLowerCase()} is to focus on concentration, freshness, and how the greens are actually served. When microgreens are harvested and eaten quickly, the nutrient density remains meaningfully higher than what most households get from older retail greens.`,
          ],
          title: "Why It Matters",
        },
        {
          callout:
            "Fresh harvest timing, minimal handling, and raw finishing applications protect the compounds most people are trying to increase.",
          id: "what-the-data-shows",
          paragraphs: [
            `Across the varieties we grow, the pattern is consistent: smaller harvest windows often mean sharper flavour, stronger colour, and better retention of vitamins and antioxidants. ${summary.title} is best understood as a practical lens for choosing which tray to buy and how soon to use it.`,
          ],
          title: "What the Data Shows",
        },
        {
          id: "how-to-use-it",
          tips: [
            "Treat microgreens as a finishing ingredient rather than a cooked base whenever possible.",
            "Build one predictable daily ritual around them so freshness turns into consistency.",
            "Pair higher-intensity varieties with simple fats or proteins to make the flavour feel balanced.",
          ],
          title: "How to Use It",
        },
      ]
    case "farm-stories":
      return [
        {
          id: "what-is-happening-on-the-farm",
          paragraphs: [
            summary.excerpt,
            "Operational stories on the farm usually look simple from the outside, but they are built from timing, tray discipline, and constant quality checks. Small process changes show up quickly in flavour, shelf life, and consistency.",
          ],
          title: "What Is Happening on the Farm",
        },
        {
          callout:
            "The best process decisions are the ones customers never notice because freshness feels effortless.",
          id: "how-the-team-runs-it",
          paragraphs: [
            `For this story, the key takeaway is workflow clarity: each handoff has to protect the crop instead of adding extra touches. ${summary.title} reflects the same approach we use across sowing, washing, packing, and dispatch.`,
          ],
          title: "How the Team Runs It",
        },
        {
          id: "why-it-affects-quality",
          tips: [
            "Shorter handling chains preserve texture and visual quality.",
            "Clear harvest windows reduce waste and improve batch consistency.",
            "Documented routines make it easier to scale without flattening flavour.",
          ],
          title: "Why It Affects Quality",
        },
      ]
    case "recipes":
      return [
        {
          id: "why-this-pairing-works",
          paragraphs: [
            summary.excerpt,
            "The best microgreen recipes do not bury the greens. They use contrast: creamy bases, warm grains, sharp dressings, or crisp toast that lets the tray stay expressive rather than decorative.",
          ],
          title: "Why This Pairing Works",
        },
        {
          callout:
            "Build the plate first, then finish with microgreens just before serving so the texture stays lively.",
          id: "a-simple-method",
          paragraphs: [
            `Our recipe approach is intentionally modular. ${summary.title} works because it turns one tray into multiple meals without asking for restaurant-level prep or specialty equipment.`,
          ],
          title: "A Simple Method",
        },
        {
          id: "serving-tips",
          tips: [
            "Add the greens after heat, not before, to preserve texture and colour.",
            "Use a lighter hand with dressings when the variety already tastes peppery or sweet.",
            "Plate high-contrast colours together so a small amount looks intentional.",
          ],
          title: "Serving Tips",
        },
      ]
    case "news":
      return [
        {
          id: "what-changed",
          paragraphs: [
            summary.excerpt,
            "The most important updates in a small food business are rarely flashy on their own. Their real value is cumulative: better routes, tighter packaging, clearer partner expectations, and more dependable weekly planning.",
          ],
          title: "What Changed",
        },
        {
          callout:
            "A strong update is one that improves the experience for growers, chefs, and home customers at the same time.",
          id: "why-it-matters",
          paragraphs: [
            `This update matters because it changes the operating baseline. ${summary.title} is part of the broader shift toward steadier fulfillment, clearer communication, and better product presentation across channels.`,
          ],
          title: "Why It Matters",
        },
        {
          id: "what-comes-next",
          tips: [
            "Keep product changes legible to customers instead of hiding them behind internal language.",
            "Tie operational wins back to freshness, waste reduction, or reliability.",
            "Treat each rollout as a system improvement, not a one-off announcement.",
          ],
          title: "What Comes Next",
        },
      ]
  }
}

function createGenericBlogArticleDetail(
  summary: BlogArticleSummary
): BlogArticleDetail {
  const author = categoryAuthors[summary.category]
  const categoryLabel = toCategoryLabel(summary.category)

  return {
    author,
    breadcrumbTitle: summary.title,
    closing: `At Ceylon Greens, we treat ${summary.tag.toLowerCase()} as something practical rather than abstract. ${summary.title} is one more way of turning good information into a better tray, a better plate, or a better weekly routine.`,
    intro: summary.excerpt,
    moreArticleIds: defaultMoreArticleIds.filter((id) => id !== summary.id).slice(0, 3),
    quote: {
      attribution: `${author.name}, ${categoryLabel}`,
      content:
        "Good microgreen content should be useful in the kitchen, grounded in the harvest, and easy to apply without overcomplicating the ritual.",
    },
    sections: buildGenericSections(summary),
    sidebarRelatedIds: buildRelatedIds(summary),
    tags: [summary.tag, categoryLabel, "Ceylon Greens"],
  }
}

const featuredArticleDetail: BlogArticleDetail = {
  author: categoryAuthors.nutrition,
  breadcrumbTitle: "Why Microgreens Are 40x More Nutritious",
  closing:
    "Whether you're looking to boost your immune system, support eye health, or simply add more nutrients to your diet, microgreens offer an easy and delicious solution. At Ceylon Greens, we grow our microgreens in the lush hills of Sri Lanka, using organic methods that preserve every bit of their nutritional power. Try adding a handful to your next meal - your body will thank you.",
  intro:
    "Microgreens have taken the wellness world by storm, and for good reason. These tiny powerhouses - harvested just 7-14 days after germination - pack an extraordinary nutritional punch that puts their fully-grown counterparts to shame. But just how much more nutritious are they? The answer may surprise you.",
  moreArticleIds: defaultMoreArticleIds,
  quote: {
    attribution: "Dr. Qin Wang, University of Maryland",
    content:
      '"Microgreens are the single most nutrient-dense food category we have studied. Gram for gram, nothing comes close to the concentration of vitamins and antioxidants found in these young plants."',
  },
  sections: [
    {
      id: "science-behind-the-claim",
      paragraphs: [
        "A landmark 2012 study published in the Journal of Agricultural and Food Chemistry by USDA researchers analyzed 25 commercially available microgreen varieties. The findings were remarkable: microgreens contained 4 to 40 times more concentrated nutrient levels than their mature counterparts. Red cabbage microgreens stood out as particularly impressive, with vitamin C concentrations six times higher and vitamin E levels an astonishing 40 times greater than mature red cabbage.",
      ],
      title: "The Science Behind the Claim",
      callout:
        "Key Finding: Red cabbage microgreens contain 40x more vitamin E and 6x more vitamin C than mature red cabbage.",
    },
    {
      id: "nutritional-comparison",
      table: {
        columns: ["NUTRIENT", "MICROGREEN", "MATURE PLANT"],
        rows: [
          {
            microgreenValue: "147 mg/100g",
            matureValue: "24.5 mg/100g",
            nutrient: "Vitamin C",
          },
          {
            microgreenValue: "24.1 mg/100g",
            matureValue: "0.6 mg/100g",
            nutrient: "Vitamin E",
          },
          {
            microgreenValue: "12.1 mg/100g",
            matureValue: "0.9 mg/100g",
            nutrient: "Beta-carotene",
          },
          {
            microgreenValue: "8.6 mg/100g",
            matureValue: "1.3 mg/100g",
            nutrient: "Lutein",
          },
        ],
      },
      title: "Nutritional Comparison",
    },
    {
      id: "how-to-maximize-nutrition",
      tips: [
        "Harvest at the right time - most microgreens reach peak nutrition between days 7 and 14. Our Ceylon Greens varieties are harvested at the optimal window for maximum nutrient density.",
        "Eat them raw - heat degrades water-soluble vitamins like C and B-complex. Add microgreens as a finishing touch to salads, sandwiches, and bowls to preserve their full nutritional profile.",
        "Store properly - keep microgreens refrigerated in a sealed container with a damp paper towel. Properly stored, they maintain nutrient levels for up to 5 days after harvest.",
      ],
      title: "How to Maximize Nutrition",
    },
  ],
  sidebarRelatedIds: [
    "easy-recipes-with-microgreens",
    "growing-your-first-tray-at-home",
  ],
  tags: ["Nutrition", "Science", "Health"],
}

const blogArticleDetailsById = new Map<string, BlogArticleDetail>(
  blogAllArticles.map((summary) => [
    summary.id,
    summary.id === blogFeaturedArticleId
      ? featuredArticleDetail
      : createGenericBlogArticleDetail(summary),
  ])
)

export function getBlogArticleDetailById(articleId: string) {
  return blogArticleDetailsById.get(articleId)
}

export function getBlogSidebarRelatedArticles(articleId: string) {
  const detail = getBlogArticleDetailById(articleId)

  return (
    detail?.sidebarRelatedIds
      .map((relatedId) => getBlogArticleById(relatedId))
      .filter((article): article is BlogArticleSummary => Boolean(article)) ?? []
  )
}

export function getBlogMoreArticles(articleId: string) {
  const detail = getBlogArticleDetailById(articleId)

  return (
    detail?.moreArticleIds
      .map((relatedId) => getBlogArticleById(relatedId))
      .filter((article): article is BlogArticleSummary => Boolean(article)) ?? []
  )
}
