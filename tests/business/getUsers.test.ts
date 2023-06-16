import { string } from "zod"
import { UserBusiness } from "../../src/business/UserBusiness"
import { USER_ROLES } from "../../src/models/User"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"


describe("Testando o método getUsers", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deve retornar uma lista com 2 usuários", async () => {
        const input = {
            q: "",
            token: "token-mock-astrodev"
        }

        const output = await userBusiness.getUsers(input)

        expect(output).toHaveLength(2)
        expect(output).toContainEqual({
            id: "id-mock-astrodev",
            name: "Astrodev",
            email: "astrodev@email.com",
            role: USER_ROLES.ADMIN,
            createdAt: expect.any(String)
        })
    })
})