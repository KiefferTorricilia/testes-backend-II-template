import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"

describe("Testando o método login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    );

    test("Deve gerar uma mensagem e um token ao logar", async () => {
        const input = {
            email: "fulano@email.com",
            password: "fulano123"
        };

        const output = await userBusiness.login(input)

        expect(output).toEqual({
            message: "Login realizado com sucesso",
            token: "token-mock-fulano"
        });
    })
})