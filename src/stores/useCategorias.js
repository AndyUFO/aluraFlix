import { create } from "zustand";

const useCategorias = create((set) => ({
  dataCategorias: [],
  fetchCategorias: async () => {
    console.log("fetching categorias");
    fetch("https://667c59353c30891b865c584c.mockapi.io/categoria")
      .then((response) => response.json())
      .then((data) => set({ dataCategorias: data }));
  },
}));

export default useCategorias;
