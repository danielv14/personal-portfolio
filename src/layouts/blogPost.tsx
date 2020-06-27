import React from 'react';

export default (frontMatter: any) => {
  return ({ children }: { children: any }) => {
    const fronty = frontMatter;
    return (
      <>
        <div>
          <p>{fronty.layout}</p>
        </div>
        {children}
      </>
    );
  };
};
