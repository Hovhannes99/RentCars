/* eslint-disable */
// prettier-ignore

export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },

  $car: {
    _slug: (slug: string) => ({
      $url: (url?: { hash?: string }) => ({
        page: '/[slug]' as const,
        query: { slug },
        hash: url?.hash
      })
    })
  },

  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
