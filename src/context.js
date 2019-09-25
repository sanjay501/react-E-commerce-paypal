import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
//Provider : provides data
//Consumer : access data

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    cartCount: 0
  };
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempproducts = [];
    storeProducts.forEach(item => {
      const singleitem = { ...item }; //three dots indicate comping value not referencing
      tempproducts.push(singleitem);
    });
    this.setState(() => {
      return { products: tempproducts };
    });
  };
  setCartCount = () => {
    let count = 0;
    this.state.cart.forEach(item => {
      count = count + item.count;
    });
    this.setState(() => {
      return { cartCount: count };
    });
  };

  resetProducts = (storelist, tag) => {

    let reproducts = [];
    storelist.forEach(item => {
      let newitem = { ...item };
      console.log(newitem);
      reproducts.push(newitem);
    });
    console.log("resetproducts", reproducts);
    this.setState(
      () => {
        return { products: reproducts };
      },
      () => {
        this.filter(tag);
      }
    );



  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    console.log(product);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  search = value => {
    console.log("hello from search method", { value });

    if (value == "") {
      this.setProducts();
    } else {
      let tempProduct = [...this.state.products];
      let filteredcart = [];
      var regex = new RegExp(value);

      tempProduct.map(item => {
        if (item.title.match(regex)) {
          filteredcart.push(item);
        }
        console.log(filteredcart, regex);
      });
      this.setState(() => {
        return {
          products: filteredcart
        };
      });
    }
  };

  filter = tag => {
    if (tag == "reset") {
      let tempProduct = [...this.state.products];
      let filteredcart = [];
      tempProduct.map(item => {
        filteredcart.push(item);
      });
      this.setState(
        () => {
          return {
            products: filteredcart
          };
        },
        () => {
          console.log("filter ", this.state.products);
        }
      );
    } else {
      let tempProduct = [...this.state.products];
      let filteredcart = [];
      tempProduct.map(item => {
        if (item.company == tag) {
          filteredcart.push(item);
        }
      });
      this.setState(
        () => {
          return {
            products: filteredcart
          };
        },
        () => {
          console.log("filter ", this.state.products);
        }
      );
    }

  };

  addToCart = id => {
    let tempProduct = [...this.state.products];
    let tempcart = [...this.state.cart];
    const index = this.state.products.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    tempcart.push(product);
    this.setState(
      () => {
        return {
          products: tempProduct,
          cart: tempcart
        };
      },
      () => {
        this.getTotals();
        this.setCartCount();
      }
    );
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false
      };
    });
  };

  increment = id => {
    console.log("hello from increment method");
    let tempcart = [...this.state.cart];
    const index = tempcart.indexOf(this.getItem(id));
    const product = tempcart[index];
    product.count++;
    const price = product.price;
    product.total = price * product.count;
    this.setState(
      () => {
        return {
          cart: tempcart
        };
      },
      () => {
        this.getTotals();
        this.setCartCount();
      }
    );
  };

  decrement = id => {
    let tempcart = [...this.state.cart];
    const index = tempcart.indexOf(this.getItem(id));
    const product = tempcart[index];
    product.count--;
    //console.log(product.count, typeof product.count);
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      const price = product.price;
      product.total = price * product.count;
      this.setState(
        () => {
          return {
            cart: tempcart
          };
        },
        () => {
          this.getTotals();
          this.setCartCount();
        }
      );
    }
  };
  removeItem = id => {
    let tempProduct = [...this.state.products];
    let tempcart = [...this.state.cart];
    const index = tempcart.indexOf(this.getItem(id));
    const product = tempcart[index];
    tempcart.splice(index, 1);
    product.inCart = false;
    this.setState(
      () => {
        return {
          products: tempProduct,
          cart: tempcart
        };
      },
      () => {
        this.getTotals();
        this.setCartCount();
      }
    );
  };
  clearCart = () => {
    console.log("hello from clear cart method");
    this.setState(
      () => {
        return {
          cart: []
        };
      },
      () => {
        this.setProducts();
        this.setCartCount();
      }
    );
  };
  getTotals = () => {
    const cart = [...this.state.cart];
    let subtotal = 0;
    let tax = 0;
    let grandtotal = 0;
    cart.map(item => {
      subtotal += item.total;
    });
    tax = subtotal * 0.13;
    grandtotal = subtotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subtotal.toFixed(2),
        cartTax: tax.toFixed(2),
        cartTotal: grandtotal.toFixed(2)
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          setProducts: this.setProducts,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          search: this.search,
          filter: this.filter,
          resetProducts: this.resetProducts,
          setCartCount: this.setCartCount
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
