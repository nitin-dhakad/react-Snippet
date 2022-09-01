import React, { useEffect, useState } from "react";
import SearchBar from "../../component/searchBar";
import Snippet from "../../component/snippet";
import { useDispatch, useSelector } from "react-redux";
import { fetchSnippetsCreator, landingActions } from "../redux/slice";
import "./index.css";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const Landing = (props) => {
  const snippetFromStore = useSelector(
    (state) => state.landingReducer.snippets
  );
  const savedIdsFromStore = useSelector(
    (state) => state.landingReducer.savedSnippets
  );
  const [snippets, setSnippets] = useState([]);
  const [toggleValue, setToogle] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSnippetsCreator());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getFiltered = () => {
    if (snippetFromStore?.length) {
      if (searchKeyword) {
        const filtered = snippetFromStore.filter((snippet) => {
          return (
            snippet?.header?.includes(searchKeyword) ||
            snippet?.code?.includes(searchKeyword)
          );
        });
        if (filtered?.length > 10) {
          return filtered?.slice(0, 10);
        } else {
          return filtered || [];
        }
      } else {
        return snippetFromStore?.slice(0, 10);
      }
    }
  };
  useEffect(() => {
    let getFilteredSnippets = getFiltered();
    if (getFilteredSnippets?.length) {
      if (toggleValue === "all") {
        if (getFilteredSnippets?.length > 10) {
          setSnippets(getFilteredSnippets.slice(0, 10));
        } else {
          setSnippets(getFilteredSnippets);
        }
      } else if (toggleValue === "saved") {
        const savedSnippets = getFilteredSnippets?.filter((snip) =>
          savedIdsFromStore?.includes(snip?.id)
        );
        if (savedSnippets?.length > 10) {
          setSnippets(savedSnippets.slice(0, 10));
        } else {
          setSnippets(savedSnippets);
        }
      }
    }
    else{
      setSnippets([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snippetFromStore, savedIdsFromStore, toggleValue, searchKeyword]);

  const onSearch = (event) => {
    const keyword = event.target.value;
    console.log(keyword);
    setSearchKeyword(keyword || "");
  };
  const onSave = (id) => {
    dispatch(landingActions.saveSnippet({ id }));
  };
  const handleChange = (event, newAlignment) => {
    setToogle(newAlignment);
  };
  return (
    <div className="container-landing">
      <div className="header-landing">
        <span className="logo-landing">{"{SNIPPET}"}</span>
        <ToggleButtonGroup
          color="primary"
          value={toggleValue}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="all"> ALL</ToggleButton>
          <ToggleButton value="saved"> Saved </ToggleButton>
        </ToggleButtonGroup>
        <SearchBar
          onSearch={onSearch}
          className="searchBar-landing"
          value={searchKeyword}
        />
      </div>
      {snippets.map((snip) => {
        return <Snippet data={snip} key={snip.id} onSave={onSave} />;
      })}
    </div>
  );
};

export default Landing;
