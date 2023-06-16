import { UserBusiness } from "../../src/business/UserBusiness"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"


describe("Testando o método signUp", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deve retornar uma mensagem e um token", async () => {
        const input = {
            name: "id-mock-fulano",
            email: "fulano@gmail.com",
            password: "fulano123"
        }

        const output = await userBusiness.signup(input)

        expect(output).toEqual({
            message: "Cadastro realizado com sucesso",
            token: "token-mock"
        })

    })
})