import React from 'react';
import './type.css';
function type() {
    return (
        <div className ="type">
        <form>
            <label >DocumentType ID</label>
            <span><input></input></span>
            <br/>
            <label >In Use</label>
            <span><input type="checkbox"/> </span>
            <br/>
            <label >Selected ERP groups</label>
            <span>  
                <select name="erpGroup" id="erp">
                    <option value="erp1">erp1</option>
                    <option value="erp2">erp2</option>
                    <option value="erp3">erp3</option>
                    <option value="erp4">erp4</option>
                </select>
            </span>
            <br/>
            <br/>
            <label >DocumentType ID</label>
            <span><input></input></span>
            <br/>
            <label >DocumentType ID</label>
            <span><input></input></span>
            <br/>
            <button type="submit" value="Submit">Submit</button>
        </form>
        </div>
    )
}

export default type
