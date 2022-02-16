
import { Card, CardMedia, CardContent, Grid, IconButton, InputAdornment, TextField, Typography, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IAuthor, IBook, IBookDetails } from '../components/book.interface';
import InfiniteScroll from 'react-infinite-scroll-component';
import ApiClient from '../services/APIClient';
import _ from "lodash";
import { Trans } from 'react-i18next';

export const Genre: React.FC = React.memo(() => {
    let navigate = useNavigate();

    let [books, setBooks] = useState<IBookDetails>({ count: 0, next: "/books/", results: [] });
    let { genreName } = useParams();


    const navigateBack = () => {
        navigate(`../`);
    };

    const fetchData = (url?: string | null, searchText = "") => {
        if (!url) return;
        ApiClient.get(url, {
            params: {
                topic: genreName,
                //mime_type: "text/html",
                mime_type: "image/jpeg",
                languages: "en",
                search: searchText
            }
        }).then(
            (response: any) => {
                console.log(response);
                if (searchText) {

                    setBooks({
                        count: response.data.count,
                        next: response.data.next ?? null,
                        results: response.data.results
                    });
                } else {

                    setBooks({
                        count: response.data.count,
                        next: response.data.next ?? null,
                        results: [...books.results, ...response.data.results]
                    });
                }

            }
        )
    };

    const debounce_func = _.debounce(fetchData, 1000, { leading: false, trailing: true });

    const refresh = () => {
        fetchData("/books/");
    };

    useEffect(() => {
        refresh();
    }, [])

    const onSearch = (event: any) => {
        debounce_func(books.next, event.target.value);
    };
    const open = (link?: string) => {
        link && window.open(link, "_blank");
    };




    return (
        <Grid container>
            <Grid item xs={12} className="pageTitle">
                <Container maxWidth="lg" >
                    <Typography variant="h1">
                        <IconButton sx={{ fontSize: "inherit", color: "inherit" }} onClick={navigateBack}>
                            <ArrowBackIcon sx={{ fontSize: "inherit", color: "inherit" }} />
                        </IconButton>
                        {genreName}
                    </Typography>
                    <TextField placeholder={"Search"} onChange={onSearch} fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                            endAdornment: <InputAdornment position="start"><CloseOutlinedIcon /></InputAdornment>,
                        }} />
                </Container>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="lg" >
                    <InfiniteScroll
                        dataLength={books?.count} //This is important field to render the next data
                        next={() => { fetchData(books?.next) }}
                        hasMore={!!books?.next}
                        loader={
                            <p style={{ textAlign: 'center' }}>
                                <b><Trans i18nKey={"LoadingText"}>Loading...</Trans></b>
                            </p>
                        }
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b><Trans i18nKey={"SearchEndMessage"}>Search Completed</Trans></b>
                            </p>
                        }
                        // below props only if you need pull down functionality
                        refreshFunction={refresh}
                        pullDownToRefresh
                        pullDownToRefreshThreshold={50}
                        pullDownToRefreshContent={
                            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                        }
                        releaseToRefreshContent={
                            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                        }
                    >

                        <Grid container className="book-list">

                            {books.results.map(
                                (book: IBook, index: number) => (
                                    <React.Fragment key={index}>
                                        {book.formats['image/jpeg'] &&
                                            <Grid item >
                                                <Card sx={{ height: "auto" }} className="book" onClick={() => { open(book?.formats?.['text/html; charset=utf-8']); }}>
                                                    <CardMedia component="img" image={book.formats['image/jpeg']}></CardMedia>
                                                    <CardContent sx={{ p: 1 }}>
                                                        <Typography color="textPrimary" variant="body2" className="book-title" gutterBottom>
                                                            {book.title}
                                                        </Typography>
                                                        <Typography color="textSecondary" variant="body2" component="div">
                                                            {book.authors.map((author: IAuthor) => (
                                                                `${author.name?.split(",")?.[1]} ${author.name?.split(",")?.[0]}`
                                                            ))}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>}
                                    </React.Fragment>
                                )
                            )}

                        </Grid>
                    </InfiniteScroll>
                </Container>
            </Grid>
        </Grid>
    );
});

export default Genre;
