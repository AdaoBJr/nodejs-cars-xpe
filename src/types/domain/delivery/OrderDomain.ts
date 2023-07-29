export interface Order {
  id: number;
  cliente?: string;
  produto: string;
  valor: number;
  entregue: boolean;
  timestamp: string;
}

export interface DbOrders {
  nextId: number;
  pedidos: Order[];
}
