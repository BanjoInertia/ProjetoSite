export function formatCurrency (number) {
    return `R$${number.toLocaleString('pt-br', {minimumFractionDigits: 2})}` ;
}