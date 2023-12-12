import React  from 'react';


const Skeleton = () => {
	return (
	  <div className="w-full p-2 space-y-2 divide-y divide-red-900 rounded-md shadow animate-pulse bg-red-900">
		{Array.from({ length: 3 }, (_, index) => (
		  <div key={index} className="flex items-center justify-between pt-2">
			<div>
			  <div className="h-2 bg-red-900 rounded-full w-10 mb-2"></div>
			  <div className="w-10 h-2 bg-red-900 rounded-full"></div>
			</div>
			<div className="h-2 bg-red-900 rounded-full w-8"></div>
		  </div>
		))}
		<span className="sr-only">Se încarcă...</span>
	  </div>
	);
  };
  
  export default Skeleton;