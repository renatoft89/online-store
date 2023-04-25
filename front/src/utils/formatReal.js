export function formatReal(value) {
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}