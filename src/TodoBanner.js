import React, { Component } from "react";

export class TodoBanner extends Component {
    render = () => 
    <div>
        <h4 className="bg-primary text-white text-center p-3">
            Список Задач { this.props.name } {" "}
            ( { this.props.tasks.filter(t => !t.done).length} надо выполнить )
        </h4>
    </div>
}
