// Les solutions ont une adresse différente en français et en anglais : le bouton FR | EN en a besoin.
export default { eleventyComputed: { slugs: (data) => data.item.s.slug } };
