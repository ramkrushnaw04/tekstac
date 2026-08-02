import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class HotelStayTest {

    @BeforeEach
    void setUp() {
        System.out.println("Setting up before test...");
    }

    @AfterEach
    void tearDown() {
        System.out.println("Cleaning up after test...");
    }

    @Test
    @Order(1)
    void testStandardRoomValidNights() {
        assertEquals(300.0, HotelStay.calculateStayCost("Standard", 3));
    }

    @Test
    @Order(2)
    void testDeluxeRoomValidNights() {
        assertEquals(400.0, HotelStay.calculateStayCost("Deluxe", 2));
    }

    @Test
    @Order(3)
    void testSuiteRoomValidNights() {
        assertEquals(1200.0, HotelStay.calculateStayCost("Suite", 3));
    }

    @Test
    @Order(4)
    void testCaseInsensitiveRoomType() {
        assertEquals(100.0, HotelStay.calculateStayCost("sTaNdArD", 1));
    }

    @Test
    @Order(5)
    void testInvalidRoomType() {
        assertEquals(0.0, HotelStay.calculateStayCost("Penthouse", 2));
    }

    @Test
    @Order(6)
    void testZeroNights() {
        assertEquals(0.0, HotelStay.calculateStayCost("Standard", 0));
    }

    @Test
    @Order(7)
    void testNegativeNights() {
        assertEquals(0.0, HotelStay.calculateStayCost("Deluxe", -5));
    }
}
