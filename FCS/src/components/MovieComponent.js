
import React, { Component } from 'react';

import {
    Text, View, Image, Alert, Platform, TextInput, FlatList, TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { addMovieAction, fetchMoviesAction, fetchSuccessAction, fetchFailedAction } from '../actions';
import { Actions } from 'react-native-router-flux';

class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { movieName: '', releaseYear: '' };
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Redux Saga tutorials - Movies list
                </Text>
                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                    New movie information
                </Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ movieName: text })}
                        value={this.state.movieName}
                        placeholder='Enter new movie name'
                    />
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                        onChangeText={(text) => this.setState({ releaseYear: text })}
                        value={this.state.releaseYear}
                        placeholder='Release year'
                    />
                </View>
                <View style={{ height: 70, backgroundColor: 'green' }}>
                    <View style={{ backgroundColor: 'green' }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.onFetchMovies('asc');
                            }}>
                            <Text> Fetch movies</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'yellow' }}>
                        <TouchableOpacity
                            onPress={() => {

                            }}>
                            <Text> Add Movie</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'yellow' }}>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.MovieComponent()
                            }}>
                            <Text> Add Movie</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 17,
                        color: 'white',
                        backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>
                        {`${item.name},releaseYear=${item.releaseYear}`}
                    </Text>
                    }
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        movies: state.movieReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction());
        },
        //Not necessary !   
        // onSuccessFetch: () => {                        
        //     dispatch(fetchSuccessAction());
        // }, 
        onAddMovie: (newMovie) => {
            dispatch(addMovieAction(newMovie));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);;