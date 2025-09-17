export const linkClasses = `
  group relative block rounded px-3 py-2 text-white bg-slate-700
  before:absolute before:inset-0 before:rounded
  before:bg-gradient-to-r before:from-amber-500 before:to-sky-500 
  before:opacity-0 before:transition-opacity before:duration-300
  group-hover:before:opacity-100 before:z-[-1]
`;

export const activeLinkClasses = 'bg-gradient-to-r from-amber-500 to-sky-500';