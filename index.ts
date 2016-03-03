@mz.Widget.Template(`
<table class="table table-striped latest-data">
    <mz-repeat list="{this.dbs}" tag="tbody">
        <tr>
            <td class="dbname">{scope.name}</td>

            <td class="query-count">
                <span class="{scope.countClassName}">{scope.queries.length}</span>
            </td>

            <td class="Query {scope.topFiveQueries[0].className}">
                {scope.topFiveQueries[0].elapsed }
                <div class="popover left">
                    <div class="popover-content">{scope.topFiveQueries[0].query}</div>
                    <div class="arrow"></div>
                </div>
            </td>
            
            <td class="Query {scope.topFiveQueries[1].className}">
                {scope.topFiveQueries[1].elapsed }
                <div class="popover left">
                    <div class="popover-content">{scope.topFiveQueries[1].query}</div>
                    <div class="arrow"></div>
                </div>
            </td>
            
            <td class="Query {scope.topFiveQueries[2].className}">
                {scope.topFiveQueries[2].elapsed }
                <div class="popover left">
                    <div class="popover-content">{scope.topFiveQueries[2].query}</div>
                    <div class="arrow"></div>
                </div>
            </td>
            
            <td class="Query {scope.topFiveQueries[3].className}">
                {scope.topFiveQueries[3].elapsed}
                <div class="popover left">
                    <div class="popover-content">{scope.topFiveQueries[3].query}</div>
                    <div class="arrow"></div>
                </div>
            </td>
            
            <td class="Query {scope.topFiveQueries[4].className}">
                {scope.topFiveQueries[4].elapsed}
                <div class="popover left">
                    <div class="popover-content">{scope.topFiveQueries[4].query}</div>
                    <div class="arrow"></div>
                </div>
            </td>
        </tr>
    </mz-repeat>
</table>
`)
@mz.Widget.ConfigureUnwrapped
class DBMonster extends mz.widgets.BasePagelet {
    @DBMonster.proxy
    dbs;
    
    setData(col){
        this.dbs.mergeArray(col);
    }
    
    constructor(){
        super();
        this.dbs = new mz.Collection(null, {key: "name"});
        this.appendTo("#body");
    }
}