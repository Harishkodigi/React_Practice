import Header from "../Header";
import { fireEvent, render ,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import AppStore from "../../reduxStore/AppStore";
import { BrowserRouter } from "react-router-dom";
import"@testing-library/jest-dom";

describe("Header Component Test Cases", () => {

    it("should load Header Component with Login Button", () => {
        render(
          <BrowserRouter>
            <Provider store={AppStore}>
              <Header />
            </Provider>
          </BrowserRouter>
        );
      
        const loginButton = screen.getByRole("button",{name: "Login"});
      
        expect(loginButton).toBeInTheDocument();
      
      });
      
      it("should load Header Component with cart 0 items", () => {
          render(
            <BrowserRouter>
              <Provider store={AppStore}>
                <Header />
              </Provider>
            </BrowserRouter>
          );
        
          const cartItems = screen.getByText("Cart - (0 items)")
        
          expect(cartItems).toBeInTheDocument();
        
        });
      
        it("should load Header Component with Cart item", () => {
          render(
            <BrowserRouter>
              <Provider store={AppStore}>
                <Header />
              </Provider>
            </BrowserRouter>
          );
        
          const cartItems = screen.getByText(/Cart/)
        
          expect(cartItems).toBeInTheDocument();
        
        });
      
        it("should load Header Component with Login and Logout when it Click", () => {
          render(
            <BrowserRouter>
              <Provider store={AppStore}>
                <Header />
              </Provider>
            </BrowserRouter>
          );
        
          const loginButton = screen.getByRole("button",{name: "Login"});
      
          fireEvent.click(loginButton);
      
          const logoutButton = screen.getByRole("button",{name: "Logout"});
        
          expect(logoutButton).toBeInTheDocument();
        
        });

})


  
  