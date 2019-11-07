
export interface Articles {
    articles: {
    links:        Pagination;
    count:        number;
    total_pages:  number;
    current_page: number;
    results:      Article[];
    }
}

export interface Pagination {
    next:     null;
    previous: null;
}

export interface Article {
    id:              number;
    title:           string;
    body:            string;
    description:     string;
    tagList:         string[];
    author:          Author;
    slug:            string;
    published:       boolean;
    created_at:      string;
    updated_at:      string;
    favourited:      boolean;
    favouriteCount:  number;
    likes_count:     number;
    like:            string;
    facebook_shares: number;
    twitter_shares:  number;
    email_shares:    number;
    avg_rating:      string;
    read_time:       number;
    view_count:      number;
    read_count:      number;
    images:          any[];
}

export interface Author {
    username: string;
    bio:      string;
    image:    string;
    email:    string;
}
