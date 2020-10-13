import axios from "axios";
const Url = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    searchBooks: (query) => axios.get(Url + query),
    getBooks: () => axios.get("/api/books"),
    saveBook: (bookData) => axios.post("/api/books", bookData),
    deleteBook: (id) => axios.delete("api/books/" + id)
};