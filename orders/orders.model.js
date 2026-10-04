export const orders = [
    {
        date: '2025-06-22',
        subtotal: 90.22,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'old red shoes',
                    price: 45.11,
                },
                quantity: 2,
            }
        ]
    }
]

export const getAllOrders = () => {
    console.log('calling orders.............')
    return orders;
}
