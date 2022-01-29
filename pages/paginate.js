import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Pagination , Hits, Configure } from "react-instantsearch-dom";
// import Hits from '../components/Hits';

const searchClient = algoliasearch('98J3MCS6DR',
'0e7171a844b79d83e18bce223aa06550',
);

export default function SearchBar() {
return (
	<>
	<InstantSearch
		searchClient={searchClient}
		indexName="maya-portfolio-articles">
		<Configure hitsPerPage={4}/>
		<Hits />
		<Pagination/>
	</InstantSearch>
	</>
);
}
