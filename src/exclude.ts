// exclude use when we want to exclude some literals from an type
type eventType='scroll' | 'click' | 'process';

type excludedType=Exclude<eventType,'scroll'>;

const excludeHandle=(event: excludedType)=>{
    console.log(`Handling Event: ${event}`);
}

excludeHandle('click');
excludeHandle('process');
//excludeHandle('scroll');   //--it will give error bcoz scroll got exclude