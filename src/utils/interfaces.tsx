export interface IETodoTask  {
    id : string,
    todo : string, 
    isCompleted : boolean, 
    isEditing : boolean

};

export interface IETodoListProps {
    todo: IETodoTask;
}