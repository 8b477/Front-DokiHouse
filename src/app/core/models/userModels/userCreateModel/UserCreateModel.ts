export interface UserCreateModel{
    readonly name          : string;
    readonly email         : string;
    readonly passwd        : string;
    readonly passwdConfirm : string;
}
