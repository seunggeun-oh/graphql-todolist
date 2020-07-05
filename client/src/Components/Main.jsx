import React from 'react';

import { Query } from "react-apollo";
import { ROOT_QUERY } from "../App";

import List from "./List";
import ModalCreateList from './ModalCreateList';

const Main = () => {
  
  return (
    <div class="row d-flex justify-content-center container">
      <div class="col-md-8">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
              <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i class="fa fa-tasks"></i>
                &nbsp;Task Lists
              </div>
          </div>
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
                <div class="ps ps--active-y">
                  <div class="ps-content">
                      <ul class=" list-group list-group-flush">
                        <Query query={ROOT_QUERY}>
                          { ({ data, loading }) => loading ? 
                            <p>사용자 불러오는 중 ...</p> :
                            <List count={data.totalLists} lists={data.allLists} /> }
                        </Query>
                      </ul>
                  </div>
              </div>
            </perfect-scrollbar>
          </div>
          <div class="d-block text-right card-footer">
            <button class="mr-2 btn btn-link btn-sm">Cancel</button>
            <ModalCreateList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;