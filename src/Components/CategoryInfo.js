const CategoryInfo = ({ categories }) => {
    categories.splice(0,1);
    // Dash separated categories splicing first element as its highlighted above
    const returnText = categories.reduce((acc, c)=>{
        acc.push(c.title);
        return acc
    }, []).join(' - ');
    return returnText
}

export default CategoryInfo;