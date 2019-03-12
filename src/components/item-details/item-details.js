import React, { Component } from 'react'
import './item-details.scss'
import Spinner from "../spinner"
import ErrorButton from "../error-button"

const Record = ({ item, field, label }) => {
    return (
        <li>{label}: <span>{item[field]}</span></li>
    )
}

export { Record }

const ItemDetails = (props) => {
    const { name } = props.item
    const { image, item } = props

    return (
        <div className='item-details app__card'>
            <img className='item-details__img' src={image} alt="character"/>
            <div className='item-details__info'>
                <h3>{name}</h3>

                <ul>
                    {
                        React.Children.map(props.children, child => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ul>

                <ErrorButton />
            </div>
        </div>
    )
}

const hocDetails = (View) => {
    return class extends Component {
        state = {
            item: null,
            image: null,
            loading: true
        }

        componentDidMount() {
            this.updateItem()
        }

        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
                this.updateItem()
            }
        }

        updateItem = () => {
            this.setState({loading: true})

            const { itemId, getData, getImageUrl } = this.props

            if (!itemId) {
                return
            }

            getData(itemId)
                .then(item => {
                    this.setState({
                        item,
                        loading: false,
                        image: getImageUrl(item)
                    })
                })
        }

        render() {
            if (this.state.loading) {
                return <Spinner />
            }

            if (!this.state.item) {
                return <span>Select a item from a list</span>
            }

            return <View {...this.props} item={this.state.item} image={this.state.image} />
        }
    }
}

export default hocDetails(ItemDetails)