import axios from 'axios';
import React from 'react';

class AddressBookService extends React.Component {
    baseUrl = `http://localhost:8080/addressBook/`;

    addAddress = (data) => {
        console.log(data)
        return axios.post(this.baseUrl + 'create' , data)
    }

    getAddressBook = () => {
        console.log("getting data");
        return axios.get(this.baseUrl)
    }

    getAddressById = (id) => {
        console.log("getting data by id");
        return axios.get(this.baseUrl + 'addressbook/' + id)
    }

    updateAddress = (data) => {
        console.log(data);
        return axios.put(this.baseUrl + 'addressbook', data)
    }

    deleteAddress = (data) => {
        console.log(data);
        return axios.delete(this.baseUrl + 'delete/'+ data)
    }
 }

export default new AddressBookService();