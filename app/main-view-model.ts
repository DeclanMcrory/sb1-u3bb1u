import { Observable } from '@nativescript/core';
import { ChatInterface } from './components/chat-interface';

export class MainViewModel extends Observable {
    private chatInterface: ChatInterface;

    constructor() {
        super();
        this.chatInterface = new ChatInterface();
    }

    onChatTap() {
        console.log('Chat feature tapped');
    }

    onLearnTap() {
        console.log('Learn feature tapped');
    }

    onAssistTap() {
        console.log('Assist feature tapped');
    }

    onSettingsTap() {
        console.log('Settings tapped');
    }
}