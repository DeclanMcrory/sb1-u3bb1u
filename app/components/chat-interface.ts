import { Observable } from '@nativescript/core';
import { AIModel } from '../models/ai-model';

export class ChatInterface extends Observable {
    private aiModel: AIModel;
    private _messages: string[] = [];
    private _userInput: string = '';

    constructor() {
        super();
        this.aiModel = new AIModel();
        this.showWelcomeMessage();
    }

    private showWelcomeMessage() {
        this.addMessage('OmniAI: Welcome! How can I assist you today?');
    }

    get messages(): string {
        return this._messages.join('\n');
    }

    get userInput(): string {
        return this._userInput;
    }

    set userInput(value: string) {
        this._userInput = value;
        this.notifyPropertyChange('userInput', value);
    }

    onSendMessage() {
        if (!this._userInput.trim()) return;

        this.addMessage(`You: ${this._userInput}`);
        const response = this.aiModel.processInput(this._userInput);
        this.addMessage(`OmniAI: ${response}`);
        this.userInput = '';
    }

    private addMessage(message: string) {
        this._messages.push(message);
        this.notifyPropertyChange('messages', this.messages);
    }
}