````
const {Fragment} = require('react');
const data = [{
	id: '1',
	title: 'Panel 1',
	cjildren: 'lorem tata atatat atat',
},
{
	id: '2',
	title: 'Panel 2',
	cjildren: 'lorem tata atatat atat',
},
{
	id: '3',
	title: 'Panel 3',
	cjildren: 'lorem tata atatat atat',
}];

<Accordion>{(accordionProps, {currentPanelId}, toggleOpen) => {
return(
	<Fragment>
       {data.map((item) => {
       	<Panel {...item}
       	isOpen={item.id === currentPanelId}
       	toggleOpen={toggleOpen}
       	/>
       })}
    </Fragment>
)	
}}</Accordion>
````