export type UsersShoppingListsResponse = {
  totalUsers: number;
  usedShoppingListCount: number;
}

export type UsersVouchersActivations = {
  userId: string;
  createdAt: string;
}[]

export type UsersCreatedAt = {
  id: string;
  createdAt: string;
  points: string | null
}[]
