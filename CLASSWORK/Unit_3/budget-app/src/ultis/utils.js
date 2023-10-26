export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "gbp",
    style: "currency",
    minimumFractionDigits: 0 // Use 2 for pennies whereas 0 will be straight integers
})