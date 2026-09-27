import { Service, signal, computed } from '@angular/core';

export type UserRole = 'ADMIN' | 'USER';

@Service()
export class AuthService {

    private currentRole =
        signal<UserRole>('USER');

    // private currentRole =
    //     signal<UserRole>('ADMIN');


    readonly role =
        this.currentRole.asReadonly();

    readonly isAdmin = computed(
        () => this.currentRole() === 'ADMIN'
    );

    readonly isNormalUser = computed(
        () => this.currentRole() === 'USER'
    );

    loginAsAdmin(): void {
        this.currentRole.set('ADMIN');
    }

    loginAsUser(): void {
        this.currentRole.set('USER');
    }
}
