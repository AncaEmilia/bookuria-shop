import React from 'react';
import Layout from '../components/Layout';
import Homecategory from '../components/Homecategory';
import products from '../utils/products.json';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            categoryName: []
        };
    }

    componentDidMount() {
        const categories = Object.values(products);
        const categoryName =Object.keys(products);
        this.setState({categories, categoryName});
    }

    render() {
        return(
            <div>
                <Layout>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.categories.map((category, index) => {
                                    return(
                                        <Homecategory
                                            key={index}
                                            image={category.image}
                                            title={category.name}
                                            description={category.description}
                                            routeName ={this.state.categoryName[index]}
                                        />
                                    )
                                })
                            } 
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
   
}

export default Home;