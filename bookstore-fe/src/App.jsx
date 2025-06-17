import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public"
import PublicLayout from "./layouts/public"
import Books from "./pages/public/books"
import AdminLayout from "./layouts/admin"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Dashboard from "./pages/admin"
import BookCreate from "./pages/admin/books/create"
import AdminBooks from "./pages/admin/books"
import AdminCategories from "./pages/admin/categories"
import CategoryCreate from "./pages/admin/categories/create"
import BookEdit from "./pages/admin/books/edit"
import ShowBook from "./pages/public/books/show"
import AdminOrders from "./pages/admin/orders"
import OrderCreate from "./pages/admin/orders/create"
import CategoryEdit from "./pages/admin/categories/edit"
import UserCreate from "./pages/admin/users/create"
import AdminUsers from "./pages/admin/users"
import UserEdit from "./pages/admin/users/edit"
import OrderEdit from "./pages/admin/orders/edit"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            
            <Route path="books">
              <Route index element={<Books />} />
              <Route path="show/:id" element={<ShowBook />} />
            </Route>
          </Route>

          {/* Auth Routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Admin Routes */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="books">
              <Route index element={<AdminBooks />} />
              <Route path="create" element={<BookCreate />} />
              <Route path="edit/:id" element={<BookEdit />} />
            </Route>
            <Route path="categories">
              <Route index element={<AdminCategories />} />
              <Route path="create" element={<CategoryCreate />} />
              <Route path="edit/:id" element={<CategoryEdit />} />
            </Route>
            <Route path="orders">
              <Route index element={<AdminOrders />} />
              <Route path="create" element={<OrderCreate />} />
              <Route path="edit/:id" element={<OrderEdit />} />
            </Route>
            <Route path="users">
              <Route index element={<AdminUsers />} />
              <Route path="create" element={<UserCreate />} />
              <Route path="edit/:id" element={<UserEdit />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
