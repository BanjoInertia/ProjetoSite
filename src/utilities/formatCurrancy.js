export function formatCurrancy (number) {
    return `R$${number.toLocaleString('pt-br', {minimumFractionDigits: 2})}` ;
}