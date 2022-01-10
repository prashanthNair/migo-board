import React from 'react';
import Layout from '../../components/Dashboard/Layout';
import ProductList from '../../components/invenatory/ProductList';
import MyProducts from '../../components/invenatory/MyProducts';

const Inventory: React.FC = () => (
  <Layout>
    <ProductList />
  </Layout>
);

export default Inventory;
