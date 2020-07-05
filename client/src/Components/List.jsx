import React from 'react';

const Status = ({ value }) => {
  if (value === "New") {
    return  <div className="badge badge-pill badge-info ml-2">NEW</div>;
  }
  else if (value === "Rejected") {
    return <div className="badge badge-danger ml-2">Rejected</div>;
  }
  else {
    return null;
  }
}

const List = ({ count, lists }) => {

  return (
    <>
      {lists.map(list => (
        <li className="list-group-item">
          <div className="todo-indicator bg-warning"></div>
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left mr-2">
                <div className="custom-checkbox custom-control"> 
                  <input className="custom-control-input" id="exampleCustomCheckbox12" type="checkbox" />
                  <label className="custom-control-label" for="exampleCustomCheckbox12">&nbsp;</label> 
                </div>
              </div>
              <div className="widget-content-left">
                <div className="widget-heading">
                  {list.title}
                  <Status value={list.status} />
                </div>
                <div className="widget-subheading"><i>By {list.author}</i></div>
              </div>
              <div className="widget-content-right"> 
                <button className="border-0 btn-transition btn btn-outline-success"> <i className="fa fa-check"></i> </button> 
                <button className="border-0 btn-transition btn btn-outline-danger"> <i className="fa fa-trash"></i> </button> 
              </div>
            </div>
          </div>
        </li> 
      ))}
    </>
  )
};

export default List;
