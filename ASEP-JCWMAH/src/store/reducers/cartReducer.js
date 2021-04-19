const initialState = {
  carts: [
    {
      id: "id_Satu",
      product: "tshirt ps96 world wide",
      price: 120000,
      images: [
        "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/11/13/b3ec1f1e-24fb-46d0-8950-d13dab61429f.jpg",
        "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/11/13/f9241c9a-3583-4197-813c-c8bd09a6983b.jpg",
        "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/11/13/1ae858e2-1781-4623-9450-b89fbcdb203a.jpg",
      ],
      quantity: 2,
    },
    {
      id: "id_dua",
      product: "tshirt ps heelflip",
      price: 120000,
      images: [
        "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/11/21/ac9482ee-5067-40b1-b935-3535ed1583aa.jpg",
        "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/11/21/406f5dc7-f305-40b3-b28c-a81f75b9a89e.jpg",
        "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/11/21/8f2ce26d-97c0-46f9-baa2-10233c226f92.jpg",
      ],
      quantity: 2,
    },
  ],
  isLoadingCart: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING_CART":
      return {
        ...state,
        isLoadingCart: action.payload,
      };
    case "SET_CART":
      return {
        ...state,
        carts: action.payload,
      };
    default:
      return state;
  }
};
